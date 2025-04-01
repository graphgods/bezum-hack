from uuid import uuid4
import os

from strawberry import type, field
from gtts import gTTS


@type
class TextToSoundQuery:
    @field(name="PrevraTextVGolos")
    async def text_to_voice(self, text: str) -> str:
        unique_id = str(uuid4())
        directory = "audio_files"
        os.makedirs(directory, exist_ok=True)
        filename = os.path.join(directory, f"output_{unique_id}.mp3")

        tts = gTTS(text=text, lang='ru')
        tts.save(filename)

        return f"http://bezum.hack.makridenko.ru/{filename}"
