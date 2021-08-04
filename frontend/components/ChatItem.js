import React from "react";

function ChatItem({ message, username }) {
  const isOwnMessage = message.author === username;
  return (
    <div style={styles.listItem(isOwnMessage)}>
      <div style={styles.author}>{message.author}</div>
      <div style={styles.container(isOwnMessage)}>
        {message.body}
        <div>
          {new Date(message.dateCreated.toISOString()).toLocaleString()}
        </div>
      </div>
    </div>
  );
}

const styles = {
  listItem: (isOwnMessage) => ({
    flexDirection: "column",
    alignItems: isOwnMessage ? "flex-end" : "flex-start",
  }),
  container: (isOwnMessage) => ({
    maxWidth: "75%",
    borderRadius: 12,
    padding: 16,
    color: "white",
    fontSize: 12,
    backgroundColor: isOwnMessage ? "#F36E65" : "#9ea1a8",
  }),
  author: { fontSize: 10, color: "gray" },
  timestamp: { fontSize: 8, color: "white", textAlign: "right", paddingTop: 4 },
};

export default ChatItem;
