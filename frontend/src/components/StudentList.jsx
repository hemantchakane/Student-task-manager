function StudentList({ students }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-lg font-semibold">Students</h2>
      <div className="mt-4 space-y-3">
        {students.map((student) => (
          <div key={student.id} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
            <p className="font-medium">{student.name}</p>
            <p className="text-sm text-slate-600">{student.email}</p>
            <p className="text-sm text-slate-500">{student.course}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StudentList;

