import React, {useState} from 'react';
import { View } from 'react-native';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import Profile from '../../components/Profile';
import { styles } from './styles';

// import { Container } from './styles';

const Home = () => {
  const [category, setCategory] = useState('');

  function handleCategorySelected(categoryId: string){
    console.log('called');
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Profile></Profile>
          <ButtonAdd />
        </View>
      </View>
      <View>
        <CategorySelect
          categorySelected = {category}
          setCategory = {handleCategorySelected}
        />
      </View>
    
    </View>
  );
}

export default Home;