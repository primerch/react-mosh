import { useNavigate } from 'react-router';

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // Redirect the user to the hompage
        navigate('/');
      }}
    >
      <button>Submit</button>
    </form>
  );
};

export default ContactPage;
