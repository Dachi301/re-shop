import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const PhantomButton = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    return (
        <div>
            <WalletMultiButton />
            {/* <WalletDisconnectButton /> */}
        </div>
    );
};

export default PhantomButton;
