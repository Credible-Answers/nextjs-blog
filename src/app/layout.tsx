import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";

import "katex/dist/katex.min.css";
import "./globals.css";

const SITE = "https://credible-answers.github.io";
const BLOG = "/nextjs-blog";

export const metadata: Metadata = {
  title: "DID you know that… — Credible Answers",
  description: "Short notes on difference-in-differences from the Credible Answers team.",
  openGraph: { images: [HOME_OG_IMAGE_URL] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href={`${BLOG}/favicon/favicon.ico`} />
      </head>
      <body>
        <nav className="ca-nav">
          <a className="nav-logo" href={`${SITE}/`}>Credible Answers</a>
          <ul className="nav-links">
            <li><a className="current" href={`${BLOG}/`}>Blog</a></li>
            <li><a href={`${SITE}/packages.html`}>Packages</a></li>
            <li><a href={`${SITE}/team.html`}>Team</a></li>
          </ul>
        </nav>

        <main>{children}</main>

        <footer className="ca-footer">
          <img src={`${SITE}/figures/HE%20logo.png`} alt="Funded by the European Union" />
          <span className="foot-brand">Credible Answers</span>
          <ul className="foot-links">
            <li><a href="https://github.com/Credible-Answers" target="_blank">GitHub</a></li>
            <li><a href="https://github.com/Credible-Answers/did_multiplegt_dyn" target="_blank">Docs</a></li>
            <li><a href="https://github.com/Credible-Answers/ReplicationPackages" target="_blank">Replications</a></li>
          </ul>
          <span className="foot-legal">
            Funded by the European Union (ERC, REALLYCREDIBLE, GA N°101043899). Views and opinions
            expressed are however those of the author(s) only and do not necessarily reflect those of
            the European Union or the European Research Council Executive Agency. Neither the European
            Union nor the granting authority can be held responsible for them.
          </span>
        </footer>
      </body>
    </html>
  );
}
