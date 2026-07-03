function TaskList({ tasks }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-lg font-semibold">Tasks</h2>
      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-slate-600">{task.studentName}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TaskList;

