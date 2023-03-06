import Link from "next/link";

const LogoutBtn = () => {
    return (
      <div>
        <Link href="/login" className="linkBtn">logout</Link>
      </div>
    );
  };
  
  export default LogoutBtn;
  