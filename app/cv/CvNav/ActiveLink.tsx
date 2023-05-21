"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./CvNav.module.scss";

export default function ActiveLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <Link
            className={`
        ${styles["nav-link"]}
        ${pathname === href ? styles["highlighted"] : null}
        `}
            href={href}
        >
            {children}
        </Link>
    );
}
