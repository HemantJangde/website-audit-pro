export default function Dashboard({ user }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.username}</h1>
      <p className="mt-4">Here you can run website audits 🚀</p>
    </div>
  );
}
