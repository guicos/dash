import Menu from "../../Dash/Menu/Menu";
import styled from "./TemplatePage.module.css";

export default function TemplatePage({filter, child}) {
  return (
    <section className={styled.section}>
      <Menu />
      <main className={styled.main}>
        {filter}
        {child}
      </main>
    </section>
  );
}
