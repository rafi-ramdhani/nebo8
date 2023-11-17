"use client";

import { ImageOptimized } from "@/components";
import styles from "./styles.module.css";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useScroll } from "@/hooks";

const LiveChat = () => {
  const [isOpenChatbox, setIsOpenChatbox] = useState(false);
  const [hasDisturbedUser, setHasDisturbedUser] = useState(false);

  const { direction } = useScroll();

  const openChatbox = useCallback(() => setIsOpenChatbox(true), []);
  const closeChatbox = useCallback(() => setIsOpenChatbox(false), []);

  useEffect(() => {
    const canDisturbUser = direction === "down" && !hasDisturbedUser;

    if (canDisturbUser) {
      openChatbox();
      setHasDisturbedUser(true);
    }
  }, [direction, hasDisturbedUser, openChatbox]);

  const startChat = () => {
    window.open(
      "https://wa.me/+628111075757/?text=Halo,%20Saya%20mau%20tahu%20tentang%20Nebo8",
      "_blank"
    );
  };

  const chatboxClassName = isOpenChatbox
    ? `${styles.chatbox} ${styles.chatboxVisible}`
    : styles.chatbox;

  const liveChatClassName = isOpenChatbox
    ? `${styles.liveChat} ${styles.liveChatInvisible}`
    : styles.liveChat;

  return (
    <Fragment>
      <div className={liveChatClassName} onClick={openChatbox}>
        <div className={styles.liveChatIcon}>
          <ImageOptimized src="/live-chat-icon.svg" alt="Live Chat Icon" />
        </div>
      </div>

      <div className={chatboxClassName} onClick={closeChatbox}>
        <h4 className={styles.chatTitleText}>please tell us your brief</h4>
        <button className={styles.chatButton} onClick={startChat}>
          Start The Chat
        </button>
      </div>
    </Fragment>
  );
};

export default LiveChat;
