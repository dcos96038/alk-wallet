export function Footer() {
  return (
    <footer className="w-full flex items-center h-10">
      <p className="mx-auto">
        {"Copyright ⓒ " + new Date().getFullYear() + " - "}
        <a className="no-underline text-primary hover:text-accent" href="#">
          Grupo R-2 SKU React - Alkemy
        </a>
      </p>
    </footer>
  );
}
