export const SideNav = ({ nav }: { nav: { id: string; label: string }[] }) => {
  return (
    <aside className="sticky top-24 h-fit border-r pr-6">
      <ul className="space-y-5">
        {nav.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block text-sm font-medium text-red-600 hover:text-red-800"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
