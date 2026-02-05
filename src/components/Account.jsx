const Account = ({ github, instagram, tiktok }) => {
  return (
    <div>
      <li>
        <a href="https://github.com/rdwn-dev">{github}</a>
      </li>
      <li>
        <a href="#">{instagram}</a>
      </li>
      <li>
        <a href="#">{tiktok}</a>
      </li>
    </div>
  );
};

export default Account;
