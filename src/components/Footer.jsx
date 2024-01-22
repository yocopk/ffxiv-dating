export default function Footer() {
  return (
    <footer className="footer p-10 bg-gradient-to-r from-red-300 to-pink-400 text-black">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-black">
              Enter your email address
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="bg-white input input-bordered join-item"
            />
            <button className="btn btn-secondary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}
