import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Text>Account Page</Text>
      <Button
        title="Open Bottom Sheet"
        onPress={() => {
          setPictureOpen(true);
        }}
      /> 
      {pictureOpen && <DownloadPicture onClose={()=> setPictureOpen(false)}/> }
    </View>
  );
}
