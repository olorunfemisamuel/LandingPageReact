import CardNav from "./CardNav"

function Navbar() {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#about" },
        { label: "Careers", ariaLabel: "About Careers", href: "#about" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#services" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#services" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#contact" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#contact" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#contact" }
      ]
    }
  ]

  return (
    <header className="sticky top-0 z-50">
      <CardNav
        logo="/SAMUEL%20(1)%20(1).png"
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    </header>
  )
}

export default Navbar