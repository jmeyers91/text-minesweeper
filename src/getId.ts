let idCounter = 0;
export default function getId(): string {
  idCounter += 1;
  return idCounter + '_' + Date.now();
}
