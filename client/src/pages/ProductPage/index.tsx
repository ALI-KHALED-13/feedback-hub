import { IProduct } from 'types';
import SideMenu from '../../components/SideMenu';
import FeedbackArea from '../../components/FeedbackArea';
import { StyledProductPageContainer, StyledProductPage} from './styled';

type HomeProps = {
  product: IProduct;
}

const ProductPage = ({product}: HomeProps) => {

  return (
    <StyledProductPageContainer>
      <StyledProductPage>
        <SideMenu productName={product.name} />
        <FeedbackArea />
      </StyledProductPage>
    </StyledProductPageContainer>
  );
};

export default ProductPage;