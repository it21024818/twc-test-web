import Link from "next/link";

const LogoutBtn = () => {
    return (
      <div>
        <Link href="/login" className="linkBtn" style={{ left: '90%', top: '80%'}}>logout</Link>
      </div>
    );
  };
  
  export default LogoutBtn;
  