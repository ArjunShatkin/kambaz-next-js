import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import Session from "./Account/Session/page";
import "./styles.css";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <Session>
      <div id="wd-kambaz">
        <div className="d-flex">
          {/* Sidebar */}
          <div>
            <KambazNavigation />
          </div>

          {/* Main content with offset */}
          <div className="wd-main-content-offset p-3 flex-fill">
            {children}
          </div>
        </div>
      </div>
    </Session>
  );
}
