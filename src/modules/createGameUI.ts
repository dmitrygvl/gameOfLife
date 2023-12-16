export function createGameUI(htmlElement: HTMLElement): void {
  htmlElement.innerHTML = `
   <div class="control">
    <div class="input-box">
      <label for="control-speed">Speed: </label>
      <input class="control-speed" type="range" min="10" max="200" value="100" step="10">
    </div>
    <div class="input-box">
     <label for="control-width">Width: </label>
     <input class="input control-width" type="number" value="7" min="3">
    </div>
    <div class="input-box">
     <label for="control-height">Height: </label>
     <input class="input control-height" type="number" value="7" min="3">
    </div>
    <button class="button changeSizeBtn">Change size</button>
  </div>
  <div class="field-wrapper"></div>
  <div class="playBtn-box"><button class="button playBtn">Start</button></div>
  `;
}
