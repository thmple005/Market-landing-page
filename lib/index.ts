import { Pool } from "pg";

const pool = new Pool({
  host: "ls-39a79fdef8e94346b95eebc2b37d40a97170c1c3.cju6mksqypz0.us-east-1.rds.amazonaws.com",
  user: "dbmasteruser",
  password: "uoUeeRdFPX(+cu?OiV0Jd5b6(Elt${pn",
  database: "landing_page",
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Trust self-signed certs
  },
});

export default pool;
