import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link href="/Labs" id="toc-home-link">
          Home
        </Link>
      </li>
      <li>
        <Link href="/Labs/Lab1" id="toc-lab1-link">
          Lab 1
        </Link>
      </li>
      <li>
        <Link href="/Labs/Lab2" id="toc-lab2-link">
          Lab 2
        </Link>
      </li>
      <li>
        <Link href="/Labs/Lab3" id="toc-lab3-link">
          Lab 3
        </Link>
      </li>
      <li>
  <Link href="/" id="kambaz-link">
    Kambaz
  </Link>
</li>
    </ul>
  );
}
