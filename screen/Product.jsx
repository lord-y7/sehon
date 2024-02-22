import React ,{useState,useEffect}from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { addToCart } from '../redux/CartReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Stack = createStackNavigator();

const ProductPage = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Product List' }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({ route }) => ({ title: route.params.product.name })}
      />
      {/* <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Cart' }}
      /> */}
    </Stack.Navigator>
  );
};

const ProductListScreen = () => {
  const navigation = useNavigation();
  const [prod, setProd] = useState([]);

  useEffect(() => {
    // Fetch products when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://pawan-ofo2.onrender.com/api/v1/product/get-product');
      setProd(data?.products);
      console.log("data",data.products)
    } catch (error) {
      console.log(error);
    }
  };
  // Dummy product data with image URLs
  const products = [
    {  id: 1, name: 'Wheat', price: '₹30.55kg', description: 'Wheat is a widely cultivated cereal grain that is commonly used as a staple food. It is a rich source of carbohydrates, protein, and dietary fiber. Wheat can be processed into various products such as flour, bread, pasta, and breakfast cereals.', imageUrl: 'https://img.freepik.com/free-vector/realistic-wheat-composition_1284-22993.jpg?w=740&t=st=1708118080~exp=1708118680~hmac=d226de6367ae0a822098b565b7b3b2806eb23c9af5afeeac4bd175fdb26716fe' },
    {  id: 2, name: 'Paddy', price: '₹140.99kg', description: 'Paddy, also known as rice, is a staple food for a large part of the world\'s population. It is a good source of energy due to its high carbohydrate content. Paddy can be cooked and consumed as a grain or processed into various products such as rice flour, rice bran oil, and rice noodles.', imageUrl: 'https://img.freepik.com/free-vector/rice-grain-illustration_1284-24517.jpg?w=740&t=st=1708118314~exp=1708118914~hmac=ad07692d09b3e3743b1bece96e1d02981cddab5d524c01dbb97beb2caf6af2f2' },
    {id: 3, name: 'Maize', price: '₹19.99 kg', description: 'Maize, also known as corn, is a cereal grain that is commonly used as food for both humans and animals. It is rich in carbohydrates, vitamins, and minerals. Maize can be consumed fresh, dried, or processed into various food products such as cornmeal, corn flour, and corn oil.', imageUrl: 'https://img.freepik.com/free-photo/background-dried-corn-seeds-top-view_140725-11780.jpg?w=826&t=st=1708118361~exp=1708118961~hmac=c5ba6a5d9bb17c66fbb718f706ab480adcdbf0a170475e29c906735ef6b5d7a5' },
    { id: 4, name: 'Mong Dal', price: '₹100.99 kg', description: 'Mong Dal, also known as mung beans, is a type of legume widely used in Asian cuisine. It is rich in protein, fiber, and antioxidants. Mong Dal is commonly used to make dal, soups, stews, and desserts.', imageUrl: 'https://img.freepik.com/free-photo/lentil-beans-background-texture_125540-4424.jpg?w=826&t=st=1708118413~exp=1708119013~hmac=e63c3781068bca1fd428ca3c3c4227f3e2c84f5c78372b84de8d50dc3853f2a1' },
    {  id: 10, name: 'Rye', price: '₹45.99 kg', description: 'Rye is a type of grain that is closely related to wheat and barley. It has a strong, earthy flavor and is often used in bread, crackers, and whiskey production. Rye is rich in fiber, vitamins, and minerals, making it a nutritious addition to the diet.', imageUrl: 'https://img.freepik.com/premium-photo/malted-barley-grains-wooden-bowl-isolated-barley-seed-close-up-top-view-macro_157837-17.jpg?w=740' },
    { id: 3, name: 'Millet', price: '$14.99 Kg', description: 'Description of product 3', imageUrl: 'https://img.freepik.com/free-photo/top-view-brown-buckwheat-inside-plate-with-pair-spoons-dark-background_179666-17371.jpg?w=826&t=st=1708118540~exp=1708119140~hmac=c439b2ae42bc4ecfbb20540be96de5972ac07f9880c9bc3bdca8db8ef669b1b6' },
    // Add more products as needed
 
    { id: 25, name: 'Bajra', price: '₹34.99 kg', description: 'Bajra, also known as pearl millet, is a gluten-free grain that is commonly consumed in India and Africa. It is rich in fiber, protein, and essential nutrients such as iron and magnesium. Bajra is often used to make roti, porridge, and fermented beverages like beer.', imageUrl: 'https://img.freepik.com/free-photo/top-view-brown-buckwheat-inside-plate-with-pair-spoons-dark-background_179666-17371.jpg?size=626&ext=jpg&ga=GA1.1.1762485246.1703666177&semt=sph' },
    { id: 27, name: 'Soybeans', price: '₹49.99 kg', description: 'Soybeans are a legume native to East Asia but are now cultivated worldwide. They are rich in protein, fiber, and essential nutrients such as iron, calcium, and omega-3 fatty acids. Soybeans can be consumed whole, as tofu, tempeh, soy milk, or used to make various soy-based products.', imageUrl: 'https://img.freepik.com/free-photo/soybeans-wooden-scoop-little-stone-mill_1387-308.jpg?size=626&ext=jpg&ga=GA1.1.1762485246.1703666177&semt=sph' },
    { id: 29, name: 'Flaxseeds', price: '₹45.99  kg', description: 'Flaxseeds, also known as linseeds, are small brown seeds that are rich in fiber, protein, and omega-3 fatty acids. They are often used as a dietary supplement to improve digestion, lower cholesterol levels, and reduce the risk of heart disease. Flaxseeds can be ground and added to smoothies, yogurt, or baked goods.', imageUrl: 'https://img.freepik.com/free-photo/flax-seeds-linseed-superfood-healthy-organic-food-concept_114579-523.jpg?w=360&t=st=1708119893~exp=1708120493~hmac=7b0044927c0b4d5213b3f515f8f48fbf59856e6f2e9984dcef85a52035790b14' },
    { id: 30, name: 'Sunflower Seeds', price: '₹55.99 kg', description: 'Sunflower seeds are the edible seeds of the sunflower plant. They are rich in healthy fats, protein, fiber, and various vitamins and minerals. Sunflower seeds can be eaten raw or roasted as a snack, added to salads, granola, or used to make sunflower seed butter.', imageUrl: 'https://img.freepik.com/free-photo/sunflower-seeds-wooden-bowl-isolated-white-background_123827-21197.jpg?w=826&t=st=1708120040~exp=1708120640~hmac=e3d4f48093e91751e7ceebf6d61f75ba9c7a9c9614455ad91d45d241b8f456ad' },
    { id: 32, name: 'Hemp Seeds', price: '₹99.99  kg', description: 'Hemp seeds, also known as hemp hearts, are the seeds of the hemp plant, Cannabis sativa. They are rich in protein, healthy fats, fiber, and various vitamins and minerals. Hemp seeds have a nutty flavor and can be eaten raw, toasted, or ground into hemp seed butter.', imageUrl: 'https://img.freepik.com/free-photo/top-view-cbd-treatment-still-life_23-2151160236.jpg?w=826&t=st=1708119855~exp=1708120455~hmac=5e851eed157db5a562ec8828cba0e997dd952e205fffdbf882147601c66dec2f' },
    { id: 37, name: 'Sesame Seeds', price: '₹79.99  kg', description: 'Sesame seeds are tiny oil-rich seeds that are rich in protein, healthy fats, and various vitamins and minerals. They are often used as a topping for bread, crackers, or sushi rolls, or ground into tahini paste to make hummus or salad dressings.', imageUrl: 'https://img.freepik.com/free-photo/golden-sesame_1368-9205.jpg?w=826&t=st=1708119787~exp=1708120387~hmac=a2723e90e5aa65d49da2ccffb344098fd77228adb8fef7422a5e666407ff71b3' },
    { id: 40, name: 'Spelt', price: '₹59.99 kg', description: 'Spelt is an ancient grain that is similar to wheat but has a nuttier flavor and chewier texture. It is rich in fiber, protein, vitamins, and minerals. Spelt flour is often used to make bread, pasta, and baked goods like muffins and cookies.', imageUrl: 'https://img.freepik.com/free-photo/healthy-spelt-breakfast-with-strawberries-blueberries_24972-1633.jpg?w=360&t=st=1708119692~exp=1708120292~hmac=a860a5b06f37b37ce83330c26ddef40d600b4d639c6e862347f082df40277bb4' },
    { id: 41, name: 'Buckwheat', price: '₹39.99 kg', description: 'Buckwheat is a gluten-free pseudocereal that is rich in protein, fiber, and essential nutrients such as magnesium and antioxidants. It is commonly used to make buckwheat flour, which is used to make pancakes, soba noodles, and porridge.', imageUrl: 'https://img.freepik.com/free-photo/buckwheats-sack-around-light-wooden-top-view_176474-2239.jpg?w=826&t=st=1708119654~exp=1708120254~hmac=0baf1b6a5479a432c297a433a9d6e7ef747b38cf58b8e6e81e44eff7607269b6' },
    { id: 42, name: 'Aduki Beans', price: '₹89.99 kg', description: 'Aduki beans, also known as adzuki or azuki beans, are small red beans that are commonly used in Asian cuisine. They are rich in protein, fiber, and various vitamins and minerals. Aduki beans are often used in sweet and savory dishes, including soups, stews, and desserts.', imageUrl: 'https://img.freepik.com/free-photo/soy-beans_1203-7294.jpg?w=826&t=st=1708119621~exp=1708120221~hmac=0b2f9a1c9d830aa70cdbcaab5e27e452cabc503f2238a113f6258b250451a393' },
    { id: 43, name: 'Black Beans', price: '₹55.99  kg', description: 'Black beans are a type of legume that is rich in protein, fiber, and various vitamins and minerals. They are commonly used in Latin American cuisine to make dishes like black bean soup, rice and beans, and black bean tacos.', imageUrl: 'https://img.freepik.com/free-photo/black-bean-small-wooden-plate-place-wooden-floor_1150-35424.jpg?w=826&t=st=1708119578~exp=1708120178~hmac=26be4053f374d1809f80526812842139c6a645f4a79318e4bb27da91950da2e0' },
    { id: 44, name: 'Kidney Beans', price: '₹49.99  kg', description: 'Kidney beans are large, kidney-shaped beans that are commonly used in chili, soups, salads, and rice dishes. They are rich in protein, fiber, and various vitamins and minerals.', imageUrl: 'https://img.freepik.com/free-photo/red-beans-kidney-isolated-white-background_74190-7803.jpg?w=826&t=st=1708119547~exp=1708120147~hmac=0c89d11fe353ac61fc40f3b7b16047a49fd6edda7d6904cbdd0afed074f6941f' },
    { id: 45, name: 'Chickpeas', price: '₹65.99  kg', description: 'Chickpeas, also known as garbanzo beans, are a type of legume that is rich in protein, fiber, and various vitamins and minerals. They are commonly used in Mediterranean and Middle Eastern cuisine to make dishes like hummus, falafel, and salads.', imageUrl: 'https://img.freepik.com/free-photo/chickpea_1368-6565.jpg?w=826&t=st=1708119508~exp=1708120108~hmac=5b3a23d5d37b1480f5f55c52b072490ea12c97ca27f0acb9ca8e99d90e71921e' },
    { id: 46, name: 'Lentils', price: '₹79.99  kg', description: 'Lentils are small, lens-shaped legumes that come in various colors, including green, red, yellow, and brown. They are rich in protein, fiber, and various vitamins and minerals. Lentils are commonly used in soups, stews, salads, and Indian dal dishes.', imageUrl: 'https://img.freepik.com/free-photo/green-split-peas-top-view_114579-10733.jpg?w=826&t=st=1708119471~exp=1708120071~hmac=c8d9a442d6f27d8cee145439e3ccfb945fe06c637cbecde14d29f8cdd8f535ad' },
    { id: 47, name: 'Pistachios', price: '₹119.99  kg', description: 'Pistachios are nuts that are rich in protein, healthy fats, fiber, and various vitamins and minerals. They are commonly eaten as a snack or used as an ingredient in various dishes, including desserts, salads, and savory dishes.', imageUrl: 'https://img.freepik.com/free-photo/pile-pistachios_1308-41523.jpg?w=900&t=st=1708119439~exp=1708120039~hmac=efcbe5e209dc53ddd4c3ff4c0f4947f2ba96b648b1c27d503936eaad33730a07' },
    { id: 48, name: 'Cashews', price: '₹129.99  kg', description: 'Cashews are kidney-shaped nuts that are rich in protein, healthy fats, fiber, and various vitamins and minerals. They are commonly eaten as a snack or used as an ingredient in various dishes, including desserts, salads, and curries.', imageUrl: 'https://img.freepik.com/free-photo/tasty-cashew-nuts-as-background_1150-45355.jpg?w=826&t=st=1708119406~exp=1708120006~hmac=e3e270af2c9b335a0bb902f9c53477dc652874387f067f3d2f9c713ca121cd37' },
    { id: 49, name: 'Almonds', price: '₹139.99  kg', description: 'Almonds are nuts that are rich in protein, healthy fats, fiber, and various vitamins and minerals. They are commonly eaten as a snack or used as an ingredient in various dishes, including desserts, salads, and savory dishes.', imageUrl: 'https://img.freepik.com/free-photo/abundance-almond-background_125540-4380.jpg?w=826&t=st=1708119368~exp=1708119968~hmac=6dfb271f49d7ed04b35a7e292458888ecde2d1c3c27c0c7cbcd6862d179d595b' },
    { id: 50, name: 'Walnuts', price: '₹149.99  kg', description: 'Walnuts are nuts that are rich in protein, healthy fats, fiber, and various vitamins and minerals. They are commonly eaten as a snack or used as an ingredient in various dishes, including desserts, salads, and baked goods.', imageUrl: 'https://img.freepik.com/free-photo/top-view-walnuts-bowl-rustic_141793-6324.jpg?w=360&t=st=1708119306~exp=1708119906~hmac=260139f65726d108cea80bff1e19459bff742987f9783ad00fe2a356ffaaf324' }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.productRow}>
          {products.map((product) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => navigation.navigate('ProductDetails', { product })}
              key={product.id}
            >
              <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>Price:`{product.price}`</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.productRow}>
          {prod.map((product) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => navigation.navigate('ProductDetails', { product })}
              key={product.id}
            >
              <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>Price:`{product.price}`</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize navigation

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    navigation.navigate('Cart'); // Navigate to the cart page after adding to cart
  };
  return (
    <View style={styles.productDetailsContainer}>
      <Image source={{ uri: product.imageUrl }} style={styles.productImageDetails} />
      <Text style={styles.productName}>Name of Product {product.name} </Text>
      <Text style={styles.productPrice}>Price {product.price} </Text>
      <Text style={styles.productDescription}>Description:{product.description}</Text>
    
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCartHandler}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const CartScreen = () => {
  return (
    <View style={styles.cartContainer}>
      <Text style={styles.cartTitle}>Cart</Text>
      {/* Display cart items here */}
    </View>
  );
};

const { width } = Dimensions.get('window');
const itemWidth = (width - 32) / 2; // Calculate item width for two items in a row

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
  },
  container: {
    padding: 16,
  },
  productRow: {
    flexDirection: 'row',
   
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 16,
    
  },
  productContainer: {
    width: "95%",
    borderWidth: 4,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    gap:20,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 1,
  },
 
  productImage: {
    width: "100%" , // Adjust image width to fit container
    height: 250,
    marginBottom: 8,
    borderRadius: 8,
  },
  productImageDetails:{
    width: "100%",
    height:350,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 12,
  },
  productDetailsContainer: {
    padding: 16,
    alignItems: 'center',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 12,
  },
  addToCartButton: {
    backgroundColor: '#3498db', // Set your desired button color
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff', // Set your desired button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProductPage;
