import { useNavigate } from "react-router-dom";

export default function ServicePage() {
  const navigate = useNavigate();
  
  const handleDelayedNav = () => {
    setTimeout(() => {
      navigate('/about')
    }, 2000)
  }
  
  return (
    <>
      <h2>Services Page</h2>
      <button onClick={handleDelayedNav}>Go to About after 2 seconds</button>
    </>
  );
}
