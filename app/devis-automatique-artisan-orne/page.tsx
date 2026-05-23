import { BtpLocalPage } from "@/components/templates/BtpLocalPage";
import { btpLocalMetadata, getBtpLocalPage } from "@/lib/btp-local-page";

const PATH = "/devis-automatique-artisan-orne";
const page = getBtpLocalPage(PATH)!;

export const metadata = btpLocalMetadata(page);

export default function DevisAutomatiqueArtisanOrnePage() {
  return <BtpLocalPage page={page} />;
}
