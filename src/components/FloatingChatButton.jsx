import { useNavigate } from "react-router-dom";
import { FaComments } from "react-icons/fa";

export default function FloatingChatButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      // className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-105"
      className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg animate-pulse"
    >
      <FaComments size={20} />
    </button>
  );
}