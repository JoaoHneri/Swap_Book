import React, { useState, useEffect } from "react";
import api from "../../../Services/Api";
import { useContext } from "react";
import { UserContext } from "../../UseContext/UserContext";
import Navbar2 from "../../Navbar2/Navbar2";
import Footer from "../../Footer/Footer";
import "./ChatNotify.css";
import ChatNot from "../../Chat/ChatNot";
import { RiEmotionSadLine } from "react-icons/ri";

const ChatNotify = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await api.get(`conversations/users/${userData._id}`);
        const { data } = response;
        setMessages(data);
      } catch (error) {
        console.log("Não foi possível carregar suas mensagens", error);
      }
    };
    getChats();
  }, [userData]);

  function handleClick(message) {
    setSelectedMessage(message);
  }

  return (
    <div className="wrapper">
      <Navbar2 />
      <div className="content">
        <div className="NotificationsChats">
          <div className="flex flex-col bg-gray-100 mt-5 screenNotify">
            <div className="flex-none bg-white shadow-md px-4 py-3 flex items-center justify-between border-b">
              <h1 className="text-lg font-bold">Mensagens Para Você</h1>
            </div>

            <div className="flex-1 px-4 py-2 contentChats">
              {messages.length === 0 ? (
                <div className="flex h-full items-center justify-center">
                  <div className="col-not-anum">
                    <RiEmotionSadLine id="icon-not-anum" />
                    <p className="text-center">Você não possui Chats ainda</p>
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message._id}
                    className="mb-4 flex items-center justify-between cursor-pointer"
                    onClick={() => handleClick(message)}
                  >
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://source.unsplash.com/random/${message._id}x${message._id}`}
                        alt="Avatar"
                      />
                      <div className="ml-4">
                        <p className="text-lg font-medium text-gray-800">
                          {message.sender.name}
                        </p>
                        <p className="text-sm font-medium text-gray-500">
                          {message.messages[0].content}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-500">
                      {message.timestamp}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div>
            {selectedMessage && (
              <ChatNot
                id={selectedMessage.idProduct}
                sender={selectedMessage.sender._id}
                receiver={selectedMessage.receiver._id}
                key={selectedMessage._id} // Adicione essa linha para forçar a recriação do componente ChatNot
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatNotify;
