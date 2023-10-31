/**
 * Returns a randomly selected item from array of items.
 */

function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}

/**
 * Takes an items array and a target item and
 * removes the first matching item, if item exists, and returns it.
 * Otherwise returns undefined.
 */

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];

    if (currentItem === item) {
      items.splice(i, 1);
      return currentItem;
    }
  }

  return undefined;
}

export { choice, remove };