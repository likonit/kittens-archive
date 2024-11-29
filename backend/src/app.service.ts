import { Injectable } from '@nestjs/common'
import * as dotenv from "dotenv"
import * as mysql from "mysql2/promise"

dotenv.config()

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbPort = process.env.DB_PORT
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME

const pool = mysql.createPool({
  user: dbUser || "root",
  password: dbPass || "",
  host: dbHost || "127.0.0.1",
  database: dbName,
  port: Number(dbPort) || 3306,
  connectionLimit: 10
})

@Injectable()
export class AppService {

  async updateDb(action: string, body: any): Promise<string> {

    let result: any, toRet: string

    // Исправлена возможность генерации id.
    if (body.data.id < 1 || body.data.id >= 370) {

        return "error"

    }

    switch (action) {

        case "like-increase":
          await pool.query(`UPDATE photos SET likes=likes+1 WHERE id = ?`, [body.data.id])
          result = (await pool.query(`SELECT likes FROM photos WHERE id = ?`, [body.data.id]))[0]

          if (result.length == 0) {

            await pool.query("INSERT INTO photos (`id`, `likes`, `views`) VALUES (?, ?, ?)", [body.data.id, 1, 1])
            toRet = "1"

          } else {

            toRet = result[0].likes.toString()

          }

          break

        case "get-stata":
          let filter = ""
          switch(body.data.filter) {
            case 2:
              filter = " order by id desc"
              break

            case 3:
              filter = " order by views desc, id ASC"
              break

            case 4:
              filter = " order by likes desc, id ASC"
              break
              
            default:
              break
          }
          const query = `SELECT * FROM photos${filter} LIMIT ? OFFSET ?`
          result = (await pool.query(query, [body.data.count, body.data.start]))[0]
          toRet = JSON.stringify(result)
          console.log(query, result)
          break

        case "view-increase":

          await pool.query(`UPDATE photos SET views=views+1 WHERE id = ?`, [body.data.id])
          result = (await pool.query(`SELECT affectedRows FROM photos WHERE id = ?`, [body.data.id]))[0]

          if (result.affectedRows == 0) 
            await pool.query("INSERT INTO photos (`id`, `likes`, `views`) VALUES (?, ?, ?)", [body.data.id, 0, 1])

          toRet = "ok"

          break
        default:
          break

      }

      return toRet

  }

}
