import "./Sidebar.css";
import { forwardRef } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = forwardRef(({ items }, ref) => {
  window.addEventListener("scroll", () => {
    ref.current.classList.toggle("Active-Blur", window.scrollY);
    ref.current.classList.toggle("Sidebar-Active-Blur", window.scrollY);
  });
  
  return (
    <div ref={ref} className="Sidebar ScrollY Transition">
      <div className="Sidebar-List Transition">
        {items.map((item, index) => (
          <SidebarItem key={index} link={item.link} icon={item.icon}>
            {item.content}
          </SidebarItem>
        ))}
      </div>
    </div>
  );
});
export default Sidebar;
