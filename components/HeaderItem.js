function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col m-1 items-center justify-center bg-black-600 bg-green-800">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className=" opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderItem;
