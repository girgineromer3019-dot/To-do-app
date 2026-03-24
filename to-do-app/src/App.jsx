import './App.css'
import { useState, useEffect } from 'react'
import Todocreate from './components/Todocreate'
import Todolist from './components/Todolist'

function App() {

const [todos, setTodos] = useState(() => {                //Bu kod, uygulama ilk yüklendiğinde localStorage'da "todos" anahtarında bir veri olup olmadığını kontrol eder. Eğer veri varsa, bu veriyi JSON.parse() ile JavaScript nesnesine dönüştürür ve başlangıç durumuna atar. Eğer veri yoksa, başlangıç durumunu boş bir dizi olarak ayarlar. Bu sayede, kullanıcı daha önce eklediği todo'ları kaybetmez ve uygulamayı her açtığında önceki todo listesi görüntülenir.
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
});

useEffect(() => {                                         // Bu kod, "todos" durumunda herhangi bir değişiklik olduğunda çalışır ve güncellenmiş "todos" listesini localStorage'a kaydeder. Böylece, kullanıcı sayfayı yenilediğinde veya uygulamayı kapatıp açtığında, önceki todo listesi korunur.
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

const createTodo = (newTodo) => {                        //Bu kod, yeni bir todo oluşturmak için kullanılan bir fonksiyondur. "newTodo" parametresi, oluşturulacak yeni todo'nun içeriğini temsil eder. Fonksiyon, mevcut "todos" listesine yeni bir todo ekler ve bu yeni todo'nun tamamlanmamış (completed: false) olduğunu varsayar. Yeni todo, mevcut "todos" listesine eklenir ve güncellenmiş liste "setTodos" fonksiyonu ile güncellenir.
  setTodos([...todos, { ...newTodo, completed: false }]); 
}

const removeTodo = (id) => {                            //Bu kod, bir todo'yu silmek için kullanılan bir fonksiyondur. "id" parametresi, silinecek todo'nun benzersiz kimliğini temsil eder. Fonksiyon, mevcut "todos" listesini filtreleyerek, silinecek todo'nun id'sine sahip olmayan tüm todo'ları içeren yeni bir liste oluşturur. Bu yeni liste, "setTodos" fonksiyonu ile güncellenir ve böylece belirtilen id'ye sahip todo listeden kaldırılır.
  setTodos(todos.filter((todo) => todo.id !== id));
}

const editTodo = (id, updatedContent) => {             //Bu kod, bir todo'yu düzenlemek için kullanılan bir fonksiyondur. "id" parametresi, düzenlenecek todo'nun benzersiz kimliğini temsil ederken, "updatedContent" parametresi, düzenlenmiş içeriği temsil eder. Fonksiyon, mevcut "todos" listesini map() yöntemiyle iterasyon yaparak, her bir todo'yu kontrol eder. Eğer bir todo'nun id'si düzenlenecek todo'nun id'sine eşitse, bu todo'nun içeriği güncellenir ve yeni bir nesne oluşturulur. Diğer todo'lar ise olduğu gibi bırakılır. Sonuç olarak, güncellenmiş "todos" listesi "setTodos" fonksiyonu ile güncellenir.
  setTodos(todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, content: updatedContent };
    }
    return todo;
  }));
}

const toggleComplete = (id) => {
  setTodos(todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo
  }))
}

return (
  <div className='App'>
    <div style={{textAlign:'center',fontSize:'30px', width:'100%', padding:'10px', borderBottom:'4px solid black'}}>
      TO-DO-LIST
    </div>
    <div>
      <Todocreate onCreateTodo={createTodo} />
      <Todolist 
        todos={todos} 
        onRemoveTodo={removeTodo} 
        onUpdateTodo={editTodo} 
        onToggleComplete={toggleComplete}
      />
    </div>
  </div>
  )
}

export default App
