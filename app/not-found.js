import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div className="flex items-center justify-center self-center text-4xl">
      <div>PLEASE RETURN TO HOME SCREEN THIS IS NOT A VALID PAGE</div>
      <Link href="/" className="text-orange-500 underline ml-4">
        GO TO HOME
      </Link>
    </div>
  );
};

export default notfound;
