// hooks/useWhatsAppWidget.js
import { useEffect } from "react";

const useWhatsAppWidget = () => {
  useEffect(() => {
    const wa_btnSetting = {
      btnColor: "#16BE45",
      ctaText: "WhatsApp Us",
      cornerRadius: 40,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: "right",
      whatsAppNumber: "918861324254",
      welcomeMessage: "Hello",
      zIndex: 999999,
      btnColorScheme: "light",
    };

    const initWhatsAppWidget = () => {
      if (window._waEmbed) {
        window._waEmbed(wa_btnSetting);
      }
    };

    const existingScript = document.getElementById("whatsapp-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?12345";
      script.async = true;
      script.id = "whatsapp-script";
      script.onload = initWhatsAppWidget;
      document.body.appendChild(script);
    } else {
      initWhatsAppWidget();
    }
  }, []);
};

export default useWhatsAppWidget;
