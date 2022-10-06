export default function CategoryLink({ children, href }) {
  return (
    <a
      href={href}
      className="fs-sm h-40 d-block link-text dropdown-link px-4 lh-15">
      {children}
    </a>
  );
}
