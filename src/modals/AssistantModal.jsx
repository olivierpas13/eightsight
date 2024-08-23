import { useQuery } from "@tanstack/react-query";
import { getAssistantInfo } from "../services/ai_assist";
import { useState } from "react";

const AssistantModal = () => {
  const [request, setRequest] = useState("");

  const { data, status, isLoading, refetch } = useQuery({
    queryKey: ["ai_assistant", request],
    queryFn: () => getAssistantInfo(request),
    enabled: false, // Prevents automatic fetching
    refetchOnWindowFocus: false,
  });

  const handleRequest = () => {
    if (request.trim() !== "") {
      refetch();
    }
  };

  return (
    <dialog id="assistant_modal" className="modal">
      <div className="modal-box h-fit">
        <h3 className="font-bold text-lg">Asistente Inteligente</h3>
        <p className="py-4">¿Qué deseas saber?</p>
        <input
          type="text"
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Deseo visualizar..."
          className="input input-bordered input-lg w-full "
        />
        <button className="btn btn-primary block mt-5" onClick={handleRequest}>
          Solicitar
        </button>
        {isLoading && (
          <div className="w-full flex h-14">
            <span className="m-auto loading loading-spinner loading-lg"></span>
          </div>
        )}
        {status === "success" && (
          <div className="prose">
            <h2 className="font-bold text-lg py-6">Respuesta:</h2>
            <p className="text-lg">{data}</p>
          </div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AssistantModal;
