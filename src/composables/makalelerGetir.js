import { ref } from "vue";
import { db } from "../firebase/config";

const makalelerGetir = () => {
  const makaleler = ref([]);
  const hata = ref(null);

  const makaleListesiniYukle = async () => {
    try {
        let res = await db.collection('makaleler').orderBy('olusturulmaTarihi','desc').get();
        makaleler.value = res.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        });

    } catch (error) {
        hata.value = error.message;
    }

  };

  return { makaleler, hata, makaleListesiniYukle };
};

export default makalelerGetir;
