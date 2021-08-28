import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import Category from '../Category';
// import { Container } from './styles';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

const CategorySelect: React.FC<Props> = ({ categorySelected, setCategory }) => {
    return (
        <ScrollView
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map((category) => {
                    return (
                        <Category
                            key={category.id}
                            title={category.title}
                            Icon={category.icon}
                            checked={category.id == categorySelected}
                            onPress={() => {setCategory(category.id)}}
                        />

                    );
                })
            }
        </ScrollView>
    );
}

export default CategorySelect;