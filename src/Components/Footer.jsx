export function Footer() {
  return (
    <footer className="w-full flex items-center">
      <p className="mx-auto">
        {"Copyright ⓒ " + new Date().getFullYear() + " - "}
        <a href="#" className="no-underline hover:text-primary">
          Grupo R-2 SKU React - Alkemy
        </a>
      </p>
    </footer>
  );
}
