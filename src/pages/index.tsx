import Layout from "@/components/Layout"
import Link from "next/link"
import { MdChecklist, MdOutlineArticle, MdOutlineComment } from "react-icons/md"

export default function Home() {

	return (

		<Layout>

			<h1 className="text-2xl font-bold">Top</h1>

			<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

				<Link href="/posts" className="h-fit hover:bg-gray-100 transition">

					<div className="border p-4">

						<MdOutlineArticle className="text-gray-500 text-4xl" />

						<span className="mt-2 block text-2xl">Posts</span>
						<p className="mt-2 text-gray-500">公開された記事をSSGで表示します。</p>
						<p className="mt-1 text-gray-500">ビルド時にサーバー側でMarkdownファイルからWebページを生成し、リクエストのたびにクライアントへ返しています。</p>
					</div>
				</Link>

				<Link href="/tweets" className="h-fit hover:bg-gray-100 transition">

					<div className="border p-4">

						<MdOutlineComment className="text-gray-500 text-4xl" />

						<span className="mt-2 block text-2xl">Tweets</span>
						<p className="mt-2 text-gray-500">公開されたツイートをSSRで表示します。</p>
						<p className="mt-1 text-gray-500">リクエスト時にサーバー側でCloud Firestoreのデータを一度読み取ってWebページを生成します。そしてクライアント側ではリアルタイムアップデートをリッスンし、ツイートのリアルタイム更新を実装しています。</p>
					</div>
				</Link>

				<Link href="/todos" className="h-fit hover:bg-gray-100 transition">

					<div className="border p-4">

						<MdChecklist className="text-gray-500 text-4xl" />

						<span className="mt-2 block text-2xl">Todos</span>
						<p className="mt-2 text-gray-500">非公開のTodoをSSGで表示します。</p>
						<p className="mt-1 text-gray-500">ビルド時に生成したWebページをリクエストのたびにクライアントに返し、クライアント上でデータを読み書きします。</p>
					</div>
				</Link>
			</div>
		</Layout>
	)
}
