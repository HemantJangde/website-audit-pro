import { useNavigate } from "react-router-dom";

export default function SidebarDrawer() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-90 bg-yellow-50 flex items-center justify-center">
      {/* Mask / Overlay */}
      <div
        onClick={() => navigate("/login")}
        className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 opacity-90 cursor-pointer flex items-center justify-center transition-all hover:opacity-100"
      >
        <div className="text-center p-8 rounded-lg shadow-lg bg-yellow-50/50">
          <h1 className="text-5xl font-extrabold text-yellow-800 mb-4 animate-pulse">
         WebAuditPro
          </h1>
          <p className="text-yellow-700 text-lg">
            Click anywhere here to login and start auditing your website performance.
          </p>
          <button className="mt-6 btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold">
            Go to Login
          </button>
        </div>
      </div>

      {/* Hidden login content below (optional) */}
      <div className="opacity-0 pointer-events-none">
        {/* Actual login form can go here if you want it pre-rendered */}
      </div>
    </div>
  );
}
