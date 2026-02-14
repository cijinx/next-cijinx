import Link from "next/link";
import Container from "../components/container";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">首页</Link>
          <Link href="/posts">文档</Link>
        </nav>
      </Container>
    </header>
  );
}
