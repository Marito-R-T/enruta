import "../styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const MyApp: FC<AppProps> = ({ Component, ...rest }: AppProps) => {
  const { store, props }: any =  wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </PersistGate>
  );
}
export default MyApp;