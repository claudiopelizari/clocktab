import React from "react";
import {
  FullView,
  MorePanel,
  config,
} from "../../tab-utils/views/FullViewWrapper";
import "./lib.js";
import "./msg-tab.css";
import UseCases from "./UseCases";
import init_msg_tab from "./init_msg_tab";

export default config({
  route: "/msg-tab",
  title: "Msg Tab",
  view: () => (
    <>
      <FullView id="msg-container">
        <div id="hint">Type something...</div>
        <div id="text-container">
          <div id="text" spellCheck="false">
            &nbsp;
          </div>
        </div>
      </FullView>
      <MorePanel>
        <UseCases />
      </MorePanel>
    </>
  ),
  onPageLoad: (load_common) => {
    load_common();
    const text = window.document.getElementById("text");
    text.setAttribute("contentEditable", "true");
    init_msg_tab({ text });
  },
});
