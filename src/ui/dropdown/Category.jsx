import CategoryLink from "../links/CategoryLink";
import DropDown from "./Dropdown";

export default function Category() {
  return (
    <div className="w-44">
      {subjects.map((subject, sid) => (
        <DropDown key={sid}>
          <div className="d-flex hv-bg-chief hv-chief h-40 lh-15 px-4">
            <span className="fw-semibold fs-2">{subject}</span>
            <span class="icon iconfont iget-icon-more ms-auto text-secondary"></span>
          </div>
          <div class="sub-list" >
            {psychology.map((item, index) => (
              <CategoryLink key={index} href={item.href}>
                {item.text}
              </CategoryLink>
            ))}
          </div>
        </DropDown>
      ))}
    </div>
  );
}

const subjects = [
  "心理学",
  "自然科学",
  "金融学",
  "家庭亲子",
  "经济学",
  "法律",
  "政治学",
  "管理学",
  "更多",
];

const psychology = [
  {
    text: "情绪管理",
    href: "#!",
  },
  {
    text: "医学",
    href: "#!",
  },
  {
    text: "理财投资方法",
    href: "#!",
  },
  {
    text: "亲子关系",
    href: "#!",
  },
  {
    text: "市场经济",
    href: "#!",
  },
  {
    text: "经典案例",
    href: "#!",
  },
  {
    text: "时局议题",
    href: "#!",
  },
];
