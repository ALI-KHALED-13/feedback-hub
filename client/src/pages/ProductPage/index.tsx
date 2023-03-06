import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IFeedback, IProduct } from 'types';
import SideMenu from '../../components/SideMenu';
import FeedbackArea from '../../components/FeedbackArea';
import { StyledProductPageContainer, StyledProductPage} from './styled';

const ProductPage = () => {

  const { id } = useParams();

  const [feedback, setFeedback] = useState<IFeedback[]>([]);
  const [productTitle, setProductTitle] = useState<string>('');

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch(`/api/products/${id}`);
      const json = await response.json() as IProduct;

      if (response.ok) {
        // console.log(json);
        setProductTitle(json.title);
        setFeedback(json.feedback);
      }
    };

    fetchFeedback();
  }, []);
  
  return (
    <StyledProductPageContainer>
      <StyledProductPage>
        <SideMenu productTitle={productTitle} />
        <FeedbackArea feedback={feedback} />
      </StyledProductPage>
    </StyledProductPageContainer>
  );
};

export default ProductPage;
