import styles from './CategoryButton.module.scss';
import { Category } from '@/types/category';

interface CategoryButtonProps {
  category: Category;
  onClick: (category: Category) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, onClick }) => {
  return (
    <button className={styles.categoryButton} onClick={() => onClick(category)}>
      <p>{category.name}</p>
    </button>
  );
};

export default CategoryButton;