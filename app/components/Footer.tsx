import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-10 pb-20 mt-10 bg-primary footer footer-center text-base-content">
      <div className="grid grid-flow-col gap-4">
        <Link href="/info#air" className="link link-hover">
          航班資訊
        </Link>
        <Link href="/info#hotel" className="link link-hover">
          飯店資訊
        </Link>
        <Link href="/info#contact" className="link link-hover">
          聯繫方式
        </Link>
      </div>
      <div>
        Copyright © 2023 - All right reserved by Snow Yang and Rhaenyra Liang
      </div>
    </footer>
  );
};
export default Footer;
