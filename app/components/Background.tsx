import styles from '../page.module.css';
const { background, background_image } = styles;

const Background = () => {
  return (
    <div className={background}>
      <img
        className={background_image}
        src="background.jpg"
        alt="background image"
      />
    </div>
  );
};
export default Background;
